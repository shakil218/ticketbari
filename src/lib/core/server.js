import {getUserToken} from "./session";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
  const token = await getUserToken();
  const header = token ? {
    authorization: `Bearer ${token}`
  } : {};

  return header;
}

// server fetch/get
export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`,{
    cache: "no-store",
  });
  // handle 404, 401, 403
  return res.json();
};

// protectedFetch
export const protectedFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`,{
    cache: "no-store",
    headers: await authHeader(),
  });
  // handle 404, 401, 403
  return res.json();
};


// server mutation
export const serverMutation = async (path,data,method='POST') => {
  const res = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ... await authHeader()
    },
    body: JSON.stringify(data),
  });

  // handle 404, 401, 403

  return res.json();
};