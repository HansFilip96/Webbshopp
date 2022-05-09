import { Box } from "@mui/material";
import React from "react";
import ScreensRoot from "../screens/Root";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Box sx={{ bgcolor: "background.default" }}>
          <ScreensRoot />
        </Box>
      </div>
    );
  }
}

export default App;
