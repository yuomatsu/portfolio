import { memo, useCallback, VFC } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

export const Footer: VFC = memo(() => {
    const history = useHistory();
    const onClickHome = useCallback(() => history.push("/"), []);
    // const onClickTwitter = () => {
    //     window.open("https://twitter.com/yuomatsu", '_blank');
    // }
    return (
        <Flex
        as="footer"
        bg="#d1d1d1"
        color="gray.700"
        align="center"
        justify="space-between"
        padding={{base: 3, md: 5 }}
        fontWeight="bold">
            <Box _hover={{cursor: "pointer"}}>
                <Link as="small" onClick={onClickHome}>© 2022 YU OMATSU</Link>
            </Box>
            {/* <Box _hover={{cursor: "pointer"}}>
                <Link onClick={onClickTwitter}><FontAwesomeIcon icon={faTwitter} /></Link>
            </Box> */}
        </Flex>
    )
}) 