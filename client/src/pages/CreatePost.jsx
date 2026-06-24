import { useState } from "react";
import Navbar from "../components/Navbar";
import { generateContent } from "../services/aiService";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAI = async () => {
    if (!title) {
      alert("Please enter a title");
      return;
    }

    setLoading(true);

    try {
      const aiText =
        await generateContent(title);

      setContent(aiText);

    } catch (error) {

      setContent(`

${title}

${title} is an important topic in today's digital world.

It helps businesses improve productivity and automate tasks.

Advantages:

• Better efficiency

• Improved productivity

• Faster decision making

• Innovation and growth

Conclusion:

${title} will continue to shape the future.

      `);
    }

    setLoading(false);
  };

  const handleSubmit = () => {

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    const existingPosts =
      JSON.parse(localStorage.getItem("posts")) || [];

    existingPosts.push(newPost);

    localStorage.setItem(
      "posts",
      JSON.stringify(existingPosts)
    );

    alert("Post Published Successfully");

    setTitle("");
    setContent("");
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Create AI Content</h1>

        <p>
          Generate professional content using AI
          and publish instantly.
        </p>

        <br />

        <input
          type="text"
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />
        <br />

        <textarea
          rows="10"
          placeholder="Write Content..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <br />
        <br />

        <button
          className="ai-btn"
          onClick={handleAI}
        >
          {loading
            ? "Generating..."
            : "Generate AI Content"}
        </button>

        <button
          className="publish-btn"
          onClick={handleSubmit}
        >
          Publish Post
        </button>

      </div>
    </>
  );
}

export default CreatePost;