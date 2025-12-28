import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadMedia.css";

function UploadMedia() {
  const [mediaType, setMediaType] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!mediaType || !category || !file) {
      alert("All steps complete pannunga");
      return;
    }

    const formData = new FormData();
    formData.append("mediaType", mediaType);
    formData.append("category", category);
    formData.append("file", file);

    const res = await fetch(
      "https://nexesdinesolution.com/backend/upload.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="upload-container">
      <h2>Upload Media</h2>

      {/* STEP 1: Media Type */}
      <p className="step-title">Step 1: Select Media Type</p>
      <div className="btn-group">
        <button
          className={mediaType === "image" ? "active" : ""}
          onClick={() => setMediaType("image")}
        >
          Image
        </button>
        <button
          className={mediaType === "video" ? "active" : ""}
          onClick={() => setMediaType("video")}
        >
          Video
        </button>
      </div>

      {/* STEP 2: Category */}
      {mediaType && (
        <>
          <p className="step-title">Step 2: Select Category</p>
          <div className="btn-group">
            <button
              className={category === "catering" ? "active" : ""}
              onClick={() => setCategory("HomePageLogo")}
            >
              Home Page Logo
            </button>
            <button
              className={category === "catering" ? "active" : ""}
              onClick={() => setCategory("ServicesPgBackgroundImage")}
            >
              Services Pg Background Image
            </button>
            <button
              className={category === "catering" ? "active" : ""}
              onClick={() => setCategory("EventManagementCards")}
            >
              Event Management Cards
            </button>
            <button
              className={category === "catering" ? "active" : ""}
              onClick={() => setCategory("OurPride")}
            >
              Our Pride
            </button>
            <button
              className={category === "event-video" ? "active" : ""}
              onClick={() => setCategory("event-video")}
            >
              Event Video
            </button>
            <button
              className={category === "catering" ? "active" : ""}
              onClick={() => setCategory("catering")}
            >
              Catering
            </button>
            <button
              className={category === "software-solution" ? "active" : ""}
              onClick={() => setCategory("software-solution")}
            >
              Software Solution
            </button>
          </div>
        </>
      )}

      {/* STEP 3: File */}
      {category && (
        <input
          type="file"
          accept={mediaType === "image" ? "image/*" : "video/*"}
          onChange={(e) => setFile(e.target.files[0])}
        />
      )}

      {/* STEP 4: Upload */}
      {file && (
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      )}

      {message && <p className="success-msg">{message}</p>}

      <button className="view-btn" onClick={() => navigate("/files")}>
        View Files
      </button>
    </div>
  );
}

export default UploadMedia;
