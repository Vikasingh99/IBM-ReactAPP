import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../auth/redux/auth.selector";

import { loadUser, logoutUser } from "../../auth/redux/auth.thunk";

import {
  getProfileService,
  deleteExperienceService,
  deleteEducationService,
  deleteAccountService,
} from "../service/profile.service";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        await dispatch(loadUser());

        const profileData = await getProfileService();

        setProfile(profileData);
      } catch (error) {
        console.log("Unable to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [dispatch]);

  const handleDeleteExperience = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this experience?",
    );

    if (!confirmed) return;

    try {
      await deleteExperienceService(id);

      const updatedProfile = await getProfileService();

      setProfile(updatedProfile);
    } catch (error) {
      console.log(error);
      alert("Unable to delete experience");
    }
  };

  const handleDeleteEducation = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this education?",
    );

    if (!confirmed) return;

    try {
      await deleteEducationService(id);

      const updatedProfile = await getProfileService();

      setProfile(updatedProfile);
    } catch (error) {
      console.log(error);
      alert("Unable to delete education");
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account?",
    );

    if (!confirmed) return;

    try {
      await deleteAccountService();

      await dispatch(logoutUser());

      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      alert("Unable to delete account");
    }
  };

  if (loading) {
    return (
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>

        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>

      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user?.name || "User"}
      </p>

      <div className="dash-buttons">
        <Link to="/dashboard/create-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>

        <Link to="/dashboard/add-experience" className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </Link>

        <Link to="/dashboard/add-education" className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </Link>
      </div>

      <h2 className="my-2">Experience Credentials</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {profile?.experience?.length > 0 ? (
            profile.experience.map((experience) => (
              <tr key={experience._id}>
                <td>{experience.company}</td>

                <td className="hide-sm">{experience.title}</td>

                <td className="hide-sm">
                  {experience.from} -{" "}
                  {experience.current ? "Now" : experience.to}
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteExperience(experience._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No experience added yet.</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>

      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {profile?.education?.length > 0 ? (
            profile.education.map((education) => (
              <tr key={education._id}>
                <td>{education.school}</td>

                <td className="hide-sm">{education.degree}</td>

                <td className="hide-sm">
                  {education.from} - {education.current ? "Now" : education.to}
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteEducation(education._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No education added yet.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="my-2">
        <button className="btn btn-danger" onClick={handleDeleteAccount}>
          <i className="fas fa-user-minus"></i> Delete My Account
        </button>
      </div>
    </section>
  );
};
