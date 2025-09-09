import Api from "./api";

export default function sendMail({ onSuccess, onError, body }) {
  const api = new Api();
  api.sendMail({ onSuccess, onError, body });
}
