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
    width: 200,
   },
  {
    Header: 'Budget',
    accessor: 'budget',
    width: WIDTH_CELL,
    tooltip: 'The budget column shows your campaign\'s daily budget. If the campaign draws from a shared budget, then the amount in this column reflects the entire shared budget.\n' +
        '\n' +
        'If you select the \'Converted currency\' layer, you’ll see the converted amounts below the local currency amounts. Bear in mind that currency conversions are based on the average monthly conversion rate for each month included in the selected date range, so the converted amounts may not always be accurate. If you’ve selected \'All time\' for your date range, you won’t be able to view converted amounts.\n'

  },
  {
    Header: 'Status',
    accessor: 'status',
    width: WIDTH_CELL,
    tooltip: 'The status column shows you if your campaign can run'
  },
  {
    Header: 'Optimisation score',
    accessor: 'optimisationScore',
    width: WIDTH_CELL,
    tooltip: 'Your optimisation score is an estimate from Google Ads of how well your Google Ads account is set to perform.'
  },
  {
    Header: 'Account',
    accessor: 'account',
    width: WIDTH_CELL,
  },
  {
    Header: 'Campaign type',
    accessor: 'campaignType',
    width: WIDTH_CELL,
    tooltip: 'Campaign types determine where customers see your ads and the settings and options available to you.'
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