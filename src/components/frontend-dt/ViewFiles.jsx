import React, { useEffect, useState } from "react";
import "./ViewMedia.css";
import EditModal from "./EditModal";

function ViewMedia() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetch("https://nexesdinesolution.com/backend/list.php")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  // group by category from URL
  const grouped = data.reduce((acc, item) => {
    const category =
      item.url.split("/").slice(-2, -1)[0]; // HomePageLogo, Event, Catering
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="view-page">
      {Object.keys(grouped).map((cat) => (
        <div className="category-block" key={cat}>
          <p className="category-title">{cat}</p>

          <div className="row-wrapper">
            <button className="arrow">◀</button>

            <div className="media-row">
              {grouped[cat].map((item, i) => (
                <div className="media-card" key={i}>
                  {/* PREVIEW */}
                  {item.url.includes("/video/") ? (
                    <video src={item.url} />
                  ) : (
                    <img src={item.url} alt={item.name} />
                  )}

                  {/* EDIT ICON */}
                  <span
                    className="edit-icon"
                    onClick={() => setEditItem(item)}
                  >
                    ✏️
                  </span>

                  {/* FILE NAME */}
                  <p className="file-name">{item.name}</p>
                </div>
              ))}
            </div>

            <button className="arrow">▶</button>
          </div>
        </div>
      ))}

      {/* EDIT MODAL */}
      {editItem && (
        <EditModal item={editItem} onClose={() => setEditItem(null)} />
      )}
    </div>
  );
}

export default ViewMedia;
