import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { alpha } from "@mui/material/styles";

export default function Hero() {
  return (
    <HeroBox id="hero">
      <InnerBox id="hero" />
      <StyledContainer></StyledContainer>
    </HeroBox>
  );
}

const HeroBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundImage:
    theme.palette.mode === "light"
      ? "linear-gradient(180deg, #CEE5FD, #FFF)"
      : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
  backgroundSize: "100% 80%",
  backgroundRepeat: "no-repeat",
}));

const InnerBox = styled(Box)({
  width: "100%",
  height: "90vh", 
  backgroundImage: "url(https://i.postimg.cc/Cx37V9cc/bg.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  position: "relative",
});

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  pt: { xs: 14, sm: 20 },
  pb: { xs: 8, sm: 12 },
});
