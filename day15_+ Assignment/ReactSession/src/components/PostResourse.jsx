import { useState } from "react";
import axios from "axios";

const PostResource = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex justify-end p-6">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-right">Post Data to API</h1>
        <form onSubmit={handleSubmit} className="mt-4 text-right">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded mb-2 text-right"
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full p-2 border rounded mb-2 text-right"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Post
          </button>
        </form>
        {response && (
          <div className="mt-4 text-right">
            <h2 className="text-lg font-semibold">Response:</h2>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostResource;
