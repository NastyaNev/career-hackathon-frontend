import React from 'react'
import {Button, ButtonGroup, Stack, TextField } from "@mui/material";
import styles from './application.module.css';

import PageSubMenu from "../../components/ui/page-sub-menu/PageSubMenu";
import PageSubMenuLink from "../../components/ui/page-sub-menu-link/PageSubMenuLink";

function Applications() {
  console.log('class', styles['new-class-input'])
  return (
    <main>
      <h2 className={styles.heading}>Отклики</h2>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
      >
        <PageSubMenu links={
          <>
            <PageSubMenuLink
              to={'/'}
              text={'Акутальные'}
              notifications={80}
            />
            <PageSubMenuLink
              to={'/'}
              text={'Новые'}
              notifications={12}
              isImportant={true}
            />
            <PageSubMenuLink
              to={'/'}
              text={'Архив'}
            />
          </>
        }
        />
          <div className={styles.filters}>
              <TextField InputProps={{classes: {
                input: styles['new-class-input']
              }}}
                  sx={{padding: `8px 12px`}}
                  className={styles.find}>
              </TextField>
              <ButtonGroup className={styles.buttons}>
                  <Button className={styles.button}></Button>
                  <Button className={styles.button}></Button>
              </ButtonGroup>
          </div>
      </Stack>
    </main>
  )
}

export default Applications
