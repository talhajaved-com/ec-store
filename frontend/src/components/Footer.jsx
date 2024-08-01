import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{
        color: "text.secondary",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        py: 2,
        px: 4,
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "#ffffff",
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ flexGrow: 1 }}>
        &copy; {new Date().getFullYear()} Designed & Developed By{" "}
        <b>
          <a href="/" style={{ textDecoration: "none" }}>
            Talha Javed
          </a>
        </b>
      </Typography>
      <Stack direction="row" spacing={1}>
        <IconButton
          color="inherit"
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Footer;
