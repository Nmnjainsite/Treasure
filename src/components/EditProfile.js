import * as React from "react";
import { Box, TextField, Modal } from "@mui/material";
import { Button } from "@mui/material";
import { ModeEditOutlineOutlined } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "grid",
  gridTemplateColumns: "200px 150px",
  gap: "1rem",
};

function EditProfile({ details, setDetails, user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ModeEditOutlineOutlined className="edit-bar" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="First Name "
            variant="standard"
            value={user.firstName}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            value={user.lastName}
          />
          <TextField
            id="standard-basic"
            label="Profession"
            variant="standard"
            value={user.bio}
            onChange={(e) =>
              setDetails((prev) => ({
                ...prev,
                profession: e.target.value,
              }))
            }
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            value={details.contact}
            onChange={(e) =>
              setDetails((prev) => ({
                ...prev,
                contact: e.target.value,
              }))
            }
          />

          <TextField
            id="standard-multiline-static"
            label="About Me"
            multiline
            rows={4}
            variant="standard"
            value={details.about}
            onChange={(e) =>
              setDetails((prev) => ({
                ...prev,
                about: e.target.value,
              }))
            }
          />

          <Button
            sx={{ display: "block", marginTop: "1rem" }}
            open={open}
            onClick={() => {
              setOpen(false);
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProfile;
