exports.getPosts = async (req, res) => {

  res.json([
    {
      id: 1,
      title: "AI Post",
      content: "Generated content"
    }
  ]);

};

exports.createPost = async (req, res) => {

  const { title, content } = req.body;

  res.json({
    message: "Post Created",
    title,
    content
  });

};