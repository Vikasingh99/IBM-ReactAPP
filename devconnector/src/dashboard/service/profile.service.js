import API from "../../utils/api";

export const getProfileService = async () => {
  const response = await API.get("/profile/me");
  return response.data;
};

export const createOrUpdateProfileService = async (profileData) => {
  const response = await API.post("/profile", profileData);
  return response.data;
};

export const addExperienceService = async (experienceData) => {
  const response = await API.post("/profile/experience", experienceData);

  return response.data;
};

export const deleteExperienceService = async (id) => {
  const response = await API.delete(`/profile/experience/${id}`);

  return response.data;
};

export const addEducationService = async (educationData) => {
  const response = await API.post("/profile/education", educationData);

  return response.data;
};

export const deleteEducationService = async (id) => {
  const response = await API.delete(`/profile/education/${id}`);

  return response.data;
};

export const deleteAccountService = async () => {
  const response = await API.delete("/profile");

  return response.data;
};
