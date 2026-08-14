import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { loadUser } from "../../auth/redux/auth.thunk";
import { createOrUpdateProfileService } from "../service/profile.service";

const Editprofile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    bio: "",
    skills: "",
    githubusername: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const profileData = {
        status: formData.status,
        company: formData.company,
        website: formData.website,
        location: formData.location,
        bio: formData.bio,

        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),

        githubusername: formData.githubusername,

        social: {
          twitter: formData.twitter,
          facebook: formData.facebook,
          linkedin: formData.linkedin,
          youtube: formData.youtube,
          instagram: formData.instagram,
        },
      };

      console.log("Sending profile:", profileData);

      await createOrUpdateProfileService(profileData);

      await dispatch(loadUser());

      navigate("/dashboard");
    } catch (err) {
      console.error("Profile error:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.msg ||
          "Unable to save profile",
      );
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Create Your Profile</h1>

      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information
      </p>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Professional Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor or Teacher">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Website */}
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        {/* Bio */}
        <textarea
          name="bio"
          placeholder="A short bio of yourself"
          value={formData.bio}
          onChange={handleChange}
        />

        {/* Skills */}
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        />

        {/* Github */}
        <input
          type="text"
          name="githubusername"
          placeholder="Github Username"
          value={formData.githubusername}
          onChange={handleChange}
        />

        {/* Social Links */}
        <input
          type="text"
          name="twitter"
          placeholder="Twitter URL"
          value={formData.twitter}
          onChange={handleChange}
        />

        <input
          type="text"
          name="facebook"
          placeholder="Facebook URL"
          value={formData.facebook}
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
        />

        <input
          type="text"
          name="youtube"
          placeholder="YouTube URL"
          value={formData.youtube}
          onChange={handleChange}
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram URL"
          value={formData.instagram}
          onChange={handleChange}
        />

        {/* Buttons */}
        <button type="submit" className="btn btn-primary">
          Save Profile
        </button>

        <button
          type="button"
          className="btn btn-light"
          onClick={() => navigate("/dashboard")}
        >
          Go Back
        </button>
      </form>
    </section>
  );
};

export default Editprofile;
