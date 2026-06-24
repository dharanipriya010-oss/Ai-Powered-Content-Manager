import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import jsPDF from "jspdf";

function Dashboard() {

  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    const savedPosts =
      JSON.parse(
        localStorage.getItem("posts")
      ) || [];

    setPosts(savedPosts);

  }, []);

  // DELETE

  const deletePost = (index) => {

    const updatedPosts =
      posts.filter((_, i) => i !== index);

    setPosts(updatedPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(updatedPosts)
    );
  };

  // EDIT

  const editPost = (index) => {

    const newTitle = prompt(
      "Edit Title",
      posts[index].title
    );

    const newContent = prompt(
      "Edit Content",
      posts[index].content
    );

    if (!newTitle || !newContent)
      return;

    const updatedPosts = [...posts];

    updatedPosts[index] = {

      title: newTitle,

      content: newContent,

      date:
        posts[index].date ||
        new Date().toLocaleDateString(),
    };

    setPosts(updatedPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(updatedPosts)
    );
  };

  // PDF EXPORT

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text(
      "AI Powered Content Manager Report",
      20,
      20
    );

    let y = 40;

    posts.forEach((post, index) => {

      doc.setFontSize(14);

      doc.text(
        `${index + 1}. ${post.title}`,
        20,
        y
      );

      y += 10;

      doc.setFontSize(11);

      const splitText =
        doc.splitTextToSize(
          post.content,
          170
        );

      doc.text(
        splitText,
        20,
        y
      );

      y += splitText.length * 8;

      y += 10;

      if (y > 260) {

        doc.addPage();

        y = 20;
      }

    });

    doc.save(
      "AI-CMS-Report.pdf"
    );

  };

  // SEARCH

  const filteredPosts =
    posts.filter((post) =>

      post.title

      .toLowerCase()

      .includes(
        search.toLowerCase()
      )

    );

  return (

    <>

      <Navbar />

      <div className="dashboard-container">

        <h1>

          📊 AI CMS Dashboard

        </h1>

        <p>

          Manage all your AI content.

        </p>

        <div className="feature-grid">

          <div className="card">

            <h2>

              {posts.length}

            </h2>

            <p>Total Posts</p>

          </div>

          <div className="card">

            <h2>

              {

                posts.filter(

                  (post) =>

                  post.content

                  .length > 100

                ).length

              }

            </h2>

            <p>

              AI Generated

            </p>

          </div>

          <div className="card">

            <h2>

              {

                new Date()

                .toLocaleDateString()

              }

            </h2>

            <p>

              Today's Date

            </p>

          </div>

        </div>

        <button

          className="export-btn"

          onClick={exportPDF}

        >

          📄 Export PDF

        </button>

        <br />

        <br />

        <input

          type="text"

          placeholder="🔍 Search Posts"

          value={search}

          onChange={(e) =>

            setSearch(
              e.target.value
            )

          }

        />

        <br />

        <br />

        {

          filteredPosts.length === 0 ?

          (

            <div>

              <h3>

                No Posts Found

              </h3>

            </div>

          )

          :

          filteredPosts.map(

            (post, index) => (

            <div

              key={index}

              className="post-card"

            >

              <h2>

                {post.title}

              </h2>

              <br />

              <p>

                {post.content}

              </p>

              <br />

              <div
                className="btn-group"
              >

                <button

                  className="edit-btn"

                  onClick={() =>

                    editPost(index)

                  }

                >

                  Edit

                </button>

                <button

                  className="delete-btn"

                  onClick={() =>

                    deletePost(index)

                  }

                >

                  Delete

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </>

  );
}

export default Dashboard;