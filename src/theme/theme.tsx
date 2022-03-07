import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                // backgroundColor: "#f5f1ee",
                backgroundColor: "#efefef",
                color: "#314656",
                lineHeight: "2.0"
            }
        }
    }
});
export default theme;