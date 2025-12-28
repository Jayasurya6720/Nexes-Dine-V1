import "./ViewMedia.css";

function EditModal({ item, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Media</h3>

        <p><b>File:</b> {item.name}</p>

        <input type="text" placeholder="Rename file (optional)" />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
