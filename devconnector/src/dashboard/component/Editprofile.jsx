const CreateProfile = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // dispatch/create profile API call here
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Create Your Profile</h1>

      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="A short bio of yourself"
          value={formData.bio}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
