const StylesComponent = () => {
    const SideBarBgColor = "#E7E9E5";
    const ChatBoxBgColor = "#F4F8F2";

    const sxStyles = {
        paper: {
            display: "flex",
            width: "100%",
            height: "100vh"
        },
        sidebarContainer: {
            width: "25vw",
            bgcolor: SideBarBgColor,
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        historyContainer: {
            overflow: 'auto',
            display: "block",
            maxHeight: 'calc(100vh - 100px)',
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        },
        historyCard: {
            width: "80%",
            marginTop: "20px",
            cursor: "pointer",
            marginLeft: "13px",
            bgcolor: "#fafafa",
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        },
        sidebarHeader: {
            bgcolor: SideBarBgColor,
            borderRadius: 0
        },
        profileData: {
            position: 'fixed',
            bottom: 0
        },
        chatBoxContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            bgcolor: '#f9f9f9'
        },
        chatAreaContainer: {
            flex: 1,
            overflowY: 'auto',
            // backgroundImage: "url('/backimg.jpg')"
            bgcolor:ChatBoxBgColor
        },
        footerContainer: {
            bgcolor: '#f9f9f9',
            py: 1,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            // backgroundImage: "url('/backimg.jpg')"
            bgcolor:ChatBoxBgColor
        }
    };
    return sxStyles;
};
export default StylesComponent;