import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "#f5f1ee",
                color: "gray.700"
            }
        }
    }
});
export default theme;