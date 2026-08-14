import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { loadUser } from "../../auth/redux/auth.thunk";
import { addExperienceService } from "../service/profile.service";

const AddExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await addExperienceService(formData);

      await dispatch(loadUser());

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.errors?.[0]?.msg ||
          err.response?.data?.msg ||
          err.response?.data?.message ||
          "Unable to add education",
      );
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add Your Experience</h1>

      <p className="lead">
        <i className="fas fa-black-tie"></i> Add any developer/programming
        positions that you have had
      </p>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <label>From Date</label>

        <input
          type="date"
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
        />

        {!formData.current && (
          <>
            <label>To Date</label>

            <input
              type="date"
              name="to"
              value={formData.to}
              onChange={handleChange}
            />
          </>
        )}

        <label>
          <input
            type="checkbox"
            name="current"
            checked={formData.current}
            onChange={handleChange}
          />
          Current Job
        </label>

        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
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

export default AddExperience;
