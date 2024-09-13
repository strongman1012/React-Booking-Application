import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { useAppDispatch } from 'src/store/hooks';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LoadingScreen from './Basic/LoadingScreen';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(12)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface DashboardSidebarProps {
    open: boolean;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ open }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [applicationMenus, setApplicationMenus] = useState<string[]>([]);
    const areaList = useSelector((state: RootState) => state.areaList.areaLists);

    useEffect(() => {
        if (areaList.length > 0) {
            setLoading(false);
            const items = areaList.filter(area => area.application_name === "Application A")[0].data.map(item => item.area_name);
            setApplicationMenus(items);
        }
    }, [areaList]);

    return (
        <Box sx={{ display: 'flex' }}>
            <LoadingScreen show={loading} />
            {!loading && applicationMenus.length > 0 && (
                <Drawer variant="permanent"
                    PaperProps={{
                        sx: {
                            height: 'calc(100% - 48px) !important',
                            top: '48px !Important',
                            border: (theme) => `2px solid ${theme.palette.primary.main}`,
                            position: 'absolute',
                            zIndex: 1
                        }
                    }}
                    open={open}>
                    <List>
                        {applicationMenus.includes('A_Area 1') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-1')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 1" />
                            </ListItemButton>
                        )}
                        {applicationMenus.includes('A_Area 2') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-2')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 2" />
                            </ListItemButton>
                        )}
                        {applicationMenus.includes('A_Area 3') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-3')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 3" />
                            </ListItemButton>
                        )}
                        {applicationMenus.includes('A_Area 4') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-4')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 4" />
                            </ListItemButton>
                        )}
                        {applicationMenus.includes('A_Area 5') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-5')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 5" />
                            </ListItemButton>
                        )}
                        {applicationMenus.includes('A_Area 6') && (
                            <ListItemButton
                                sx={{ minHeight: 48, px: 2.5 }}
                                onClick={() => navigate('/dashboard/a-area-6')}
                            >
                                <ListItemIcon sx={{ color: (theme) => `${theme.palette.primary.main}` }}>
                                    <StarOutlineIcon sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}`, borderRadius: 1 }} />
                                </ListItemIcon>
                                <ListItemText primary="A_Area 6" />
                            </ListItemButton>
                        )}
                    </List>
                </Drawer>
            )}
        </Box>
    );
}

export default DashboardSidebar;
