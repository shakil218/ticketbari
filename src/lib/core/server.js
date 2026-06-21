const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// server fetch/get
export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`);
  // handle 404, 401, 403
  return res.json();
};


// server mutation
export const serverMutation = async (path,data) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // handle 404, 401, 403

  return res.json();
};