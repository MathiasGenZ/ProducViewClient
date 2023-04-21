import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {
  GlassMagnifier,
} from "react-image-magnifiers";

export default function DialogCard({ open, setOpen, img }) {
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} scroll={"paper"}>
        <DialogContent dividers={true}>
          <DialogContentText
          >
            <div style={{ width: "100%", height: "100%" }}>
              <GlassMagnifier
							
                imageSrc={img}
                imageAlt="Example"
              />
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
