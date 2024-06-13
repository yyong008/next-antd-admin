export async function query(url: string, options?: any) {
  return fetch(url, options)
    .then(res => res.json())
    .catch(e => console.error(e));
}

export async function queryPage(url: string, options?: any) {
  return fetch(url, options)
    .then(res => res.json())
    .catch(e => console.error(e));
}

export async function post(url: string, data: any, options?: any) {
  return fetch(url, {
    ...(options ?? {}),
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => console.error(e));
}

export async function put(url: string, data: any, options?: any) {
  const opts: RequestInit = {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  };
  return fetch(url, opts)
    .then(res => res.json())
    .catch(e => console.error(e));
}

export async function deleteOne(url: string, data: any, options?: any) {
  const opts: RequestInit = {
    ...options,
    method: 'DELETE',
    body: JSON.stringify(data),
  };
  return fetch(url, opts)
    .then(res => res.json())
    .catch(e => console.error(e));
}
