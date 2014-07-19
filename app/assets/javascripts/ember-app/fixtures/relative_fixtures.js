Relatives.Relative.FIXTURES = [
  {
    id: 'george-bluth',
    name: 'George Bluth',
    siblings: [
      'oscar-bluth'
    ],
    kids: [
      'michael-bluth',
      'lindsay-bluth-funke',
      'george-oscar-bluth-jr'
    ]
  },
  {
    id: 'oscar-bluth',
    name: 'Oscar Bluth',
    siblings: [
      'george-bluth'
    ],
    kids: [
      'buster-bluth'
    ]
  },
  {
    id: 'michael-bluth',
    name: 'Michael Bluth',
    ancestors: ['george-bluth'],
    siblings: [
      'lindsay-bluth-funke',
      'george-oscar-bluth-jr'
    ],
    kids: ['george-michael-bluth']
  },
  {
    id: 'lindsay-bluth-funke',
    name: 'Lindsay Bluth-Funke',
    ancestors: ['george-bluth'],
    siblings: [
      'michael-bluth',
      'george-oscar-bluth-jr'
    ]
  },
  {
    id: 'george-oscar-bluth-jr',
    name: 'George Oscar Bluth Jr.',
    ancestors: ['george-bluth'],
    siblings: [
      'michael-bluth',
      'lindsay-bluth-funke'
    ],
    kids: ['steve-holt']
  },
  {
    id: 'buster-bluth',
    name: 'Buster Bluth',
    ancestors: ['oscar-bluth']
  },
  {
    id: 'george-michael-bluth',
    name: 'George Michael Bluth',
    ancestors: [
      'george-bluth',
      'michael-bluth'
    ]
  },
  {
    id: 'maybe-funke',
    name: 'Maybe Funke',
    ancestors: [
      'george-bluth',
      'lindsay-bluth-funke'
    ]
  },
  {
    id: 'steve-holt',
    name: 'Steve Holt',
    ancestors: [
      'george-bluth',
      'george-oscar-bluth-jr'
    ]
  }
];