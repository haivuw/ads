export const HEADER_TYPE = {
  ALL_CAMPAIGNS: 'All campaigns',
  ONE_CAMPAIGN: 'A campaign',
  CREATE_CAMPAIGN: 'Create campaign'
};
const WIDTH_CELL = 120;
const WIDTH_CELL_SMALL = 90;
export const COLUMNS_CAMPAIGNS = [
  {
    Header: 'Campaign',
    accessor: 'campaignName',
    width: 200
  },
  {
    Header: 'Budget',
    accessor: 'budget',
    width: WIDTH_CELL
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: WIDTH_CELL
  },
  {
    Header: 'Optimisation score',
    accessor: 'optimisationScore',
    width: WIDTH_CELL
  },
  {
    Header: 'Account',
    accessor: 'account',
    width: WIDTH_CELL
  },
  {
    Header: 'Campaign type',
    accessor: 'campaignType',
    width: WIDTH_CELL
  },

  {
    Header: 'Conversions',
    accessor: 'conversions',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'cost.conv',
    accessor: 'costConv',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'interactions',
    accessor: 'interactions',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'interaction rate',
    accessor: 'interactionRate',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'Avg Cost',
    accessor: 'AvgCost',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'Cost',
    accessor: 'cost',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'Click',
    accessor: 'click',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'Invalid click',
    accessor: 'invalidClick',
    width: WIDTH_CELL_SMALL
  },
  {
    Header: 'Avg CPC',
    accessor: 'avgCPC',
    width: WIDTH_CELL_SMALL
  }
  // ],
  // },
];