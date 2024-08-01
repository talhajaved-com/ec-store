import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        p: 3
      }}
    >
      <Typography variant="h1" color="error">
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you’re looking for does not exist.
      </Typography>
     
    </Box>
  );
};

export default NotFoundPage;
