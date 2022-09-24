import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "/images/Calculator.webp",
    title: "Calculator",
    width: "32%",
    link: "https://mohit8820.github.io/Calculator-1/",
  },
  {
    url: "/images/Simon.webp",
    title: "Simon-Game",
    width: "32%",
    link: "https://mohit8820.github.io/Simon-Game/",
  },
  {
    url: "/images/todo.webp",
    title: "To-Do",
    width: "32%",
    link: "https://hitmo-todo-list.herokuapp.com/",
  },
  {
    url: "/images/queryExchange.webp",
    title: "Query Exchange Portal",
    width: "32%",
    link: "https://query-exchange-main.herokuapp.com/",
  },
];
function open(url) {
  const win = window.open(url, "_blank");
  if (win != null) {
    win.focus();
  }
}
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.85,
      transition: "all 0.5s",
      borderRadius: 3,
    },
    "& .MuiImageMarked-root": {
      opacity: 1,
      height: 5,
      width: 58,
      transition: "all 0.5s",
    },
    "& .MuiTypography-root": {
      border: "4px solid #fff",
      fontSize: "2rem",
      color: "#fff",
      background: "none",
      transition: "all 0.5s",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: 3,
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#1E3A8A",
  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
}));

export default function Work() {
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          margin: "auto",
          border: "1px solid #868e96",
          borderRadius: 3,
          padding: "2.5vw",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {images
          .slice(0)
          .reverse()
          .map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
              onClick={() => open(image.link)}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    fontSize: "1.5rem",
                    backgroundColor: "#1E3A8A65",
                    borderRadius: 1,
                    border: "4px solid #fff",
                  }}
                >
                  {image.title}
                </Typography>
              </Image>
            </ImageButton>
          ))}
      </Box>
    </div>
  );
}
