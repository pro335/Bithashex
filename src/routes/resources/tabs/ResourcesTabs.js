import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 'auto',
    fontSize: 22,
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(4),
    fontFamily: [
      'Poppins', 
      'Roboto', 
      '"Helvetica Neue"'
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1d275a',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: 'none',
  },
}));

function ResourcesTabs(param) {
  const classes = useStyles();
  const [value, setValue] = React.useState(param.index);
  let history = useHistory();

  const handleChange = (event, newValue) => {
    if(param.index === newValue)
        return;
    if(newValue === 0)
      history.push("/app/resources");
    
    if(newValue === 1)
      history.push("/app/forexTradingPart1");

    if(newValue === 2)
      history.push("/app/forexTradingPart2");

  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Basic tech analysis" />
          <AntTab label="Forex Trading Part 1" />
          <AntTab label="Forex Trading Part 2" />
        </AntTabs>
      </div>
    </div>
  );
}

export default ResourcesTabs;