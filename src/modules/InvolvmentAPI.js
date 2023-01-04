export default class InvolvementAPI {
  constructor() {
    this.baseURL = 'http://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    this.key = 'sbAXco2RU8G9aeKC1vW3';
  }

  getComments = async (itemId) => {
    try {
      const res = await fetch(
        `${this.baseURL}/apps/${this.key}/comments?item_id=${itemId}`,
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  postComment = async (id, name, text) => {
    try {
      const res = await fetch(`${this.baseURL}/apps/${this.key}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment: text,
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  };
}
