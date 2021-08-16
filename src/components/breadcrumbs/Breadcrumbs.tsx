import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

export default function BreadcrumbsComponent({ breadcrumbs }) {
  return (
      <div style={{marginBottom: 10}}>
        <Breadcrumbs style={{marginBottom: 5}} aria-label="breadcrumb">
            {
                breadcrumbs.map(b => (
                    b?.link ? <Link color="inherit" href={b.link} >
                        {b.name}
                    </Link>
                        :
                    <Typography color="textPrimary"> {b.name}</Typography>
                ))
            }
        </Breadcrumbs>
        <Divider />
      </div>
  );
}
