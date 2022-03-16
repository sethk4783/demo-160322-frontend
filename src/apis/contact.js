import axios from "axios";

const CLASSIFICATION_API = "http://localhost:5000/api/v1/contact";

export async function getContacts(params = {}) {
  return await axios.get(`${CLASSIFICATION_API}/all`, { params });
}

export async function getContact(contactId) {
  return await axios.get(`${CLASSIFICATION_API}/${contactId}`);
}

export async function createContact(payload) {
  return await axios.post(`${CLASSIFICATION_API}`, payload);
}

export async function updateContact(contactId, payload) {
  return await axios.put(`${CLASSIFICATION_API}/${contactId}`, payload);
}

export async function deleteContact(contactId) {
  return await axios.delete(`${CLASSIFICATION_API}/${contactId}`);
}
