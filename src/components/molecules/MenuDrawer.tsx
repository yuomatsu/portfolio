import { memo, VFC } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickProfile: () => void;
    onClickSkill: () => void;
    onClickCareer: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickProfile, onClickSkill, onClickCareer } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" 
                            onClick={() => {
                                onClickHome()
                                onClose()
                            }}>HOME
                        </Button>
                        <Button w="100%" 
                            onClick={() => {
                                onClickProfile()
                                onClose()
                            }}>PROFILE
                        </Button>
                        <Button w="100%"
                            onClick={() => {
                                onClickSkill()
                                onClose()
                            }}>SKILL
                        </Button>
                        <Button w="100%"
                            onClick={() => {
                                onClickCareer()
                                onClose()
                            }}>CAREER
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}) 