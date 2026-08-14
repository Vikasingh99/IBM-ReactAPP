import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { loadUser } from "../../auth/redux/auth.thunk";
import { addEducationService } from "../service/profile.service";

const AddEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
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
      await addEducationService(formData);

      await dispatch(loadUser());

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to add education");
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add Your Education</h1>

      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
        that you have attended
      </p>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="school"
          placeholder="School or Bootcamp"
          value={formData.school}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="degree"
          placeholder="Degree or Certificate"
          value={formData.degree}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fieldofstudy"
          placeholder="Field Of Study"
          value={formData.fieldofstudy}
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
          Current Education
        </label>

        <textarea
          name="description"
          placeholder="Program Description"
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

export default AddEducation;
