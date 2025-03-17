import { TreeItem, TreeView } from '@mui/lab';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { IMenu } from 'src/types/menu';

type Props = {
  menus: IMenu[];
  onDelete: (menu: IMenu) => void;
  onEdit: (menu: IMenu) => void;
};

export function MenusList({ menus, onDelete, onEdit }: Props) {
  function renderTree(nodes: IMenu[]) {
    return nodes.map((menu) => (
      <TreeItem
        key={menu.id}
        nodeId={String(menu.id)}
        label={
          <Stack flexDirection="row" alignItems="center">
            <Typography component="span">{menu.label}</Typography>

            <IconButton
              sx={{ ml: 'auto' }}
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                onDelete({ ...menu });
              }}
            >
              <Iconify icon="ri:delete-bin-6-line" />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onEdit({ ...menu });
              }}
            >
              <Iconify icon="ri:edit-line" />
            </IconButton>
          </Stack>
        }
        sx={{
          '& .MuiTreeItem-content': {
            borderRadius: 1,
            backgroundColor: (theme) => `${theme.palette.background.default}`,
            '&:hover': {
              backgroundColor: (theme) => `${theme.palette.background.neutral}`,
            },
          },
        }}
      >
        {Array.isArray(menu.children) ? renderTree(menu.children) : null}
      </TreeItem>
    ));
  }

  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<Iconify icon="ri:arrow-down-s-line" />}
        defaultExpandIcon={<Iconify icon="ri:arrow-right-s-line" />}
        defaultEndIcon={null}
        defaultExpanded={['1']}
      >
        {renderTree(menus)}
      </TreeView>
    </Box>
  );
}
