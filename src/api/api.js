"use client";

class HttpRequest {
  #api_host;

  constructor() {
    this.#api_host = "http://api_host";
  }

  async get({ onError, onSuccess, query }) {
    let redirectPath = "";
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
        cache: "no-cache",
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(res.status);
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    } finally {
      if (redirectPath != "") redirect(redirectPath);
    }
  }

  async post({ onError, onSuccess, body, query }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(res.status);
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async put({ onError, onSuccess, body, query }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
        body: body,
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(res.status);
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async patch({ onError, onSuccess, body, query }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
        body: body,
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(res.status);
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }

  async delete({ onError, onSuccess, query }) {
    try {
      const res = await fetch(this.#api_host.concat(query), {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("access")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (onSuccess) onSuccess(data);
        return data;
      } else throw new Error(res.status);
    } catch (e) {
      console.log(e);
      if (onError) onError(e);
      return;
    }
  }
}

export default class Api {
  #httpRequest;

  constructor() {
    this.#httpRequest = new HttpRequest();
  }

  async sendMail({ body, onSuccess, onError }) {
    return await this.#httpRequest.post({
      query: `/getcall`,
      body: JSON.stringify(body),
      onError,
      onSuccess,
    });
  }
}
