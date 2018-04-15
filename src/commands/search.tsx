import { render, h, Component } from 'ink'
import { Package } from '../lib/install'

interface EmmaProps {
  onError: (err: Error) => void
  onExit: () => void
}

interface EmmaState {
  query: string
  packages: Package[]
}

// Emma ----------------------------------------------------------------------

class Emma extends Component<EmmaProps, EmmaState> {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      packages: [],
    }
  }

  handleSearch(query: string) {
    console.log(query)
  }

  handlePackageToggle() {
    return
  }

  render() {
    const { query } = this.state

    return <div>Search</div>
  }
}

// Command -------------------------------------------------------------------

export const options = {
  description: `Search and install packages and playlists.`,
  help: `
      Usage
      $ emma search

      Examples
      $ emma search

      Options
      - no options, really simple!  
   `,
  flags: {
    verbose: {
      type: 'boolean',
      alias: 'v',
      default: false,
    },
  },
}

export async function run() {
  let unmount: any

  const onError = () => {
    unmount()
    process.exit(1)
  }

  const onExit = () => {
    unmount()
    process.exit()
  }

  unmount = render(h(Emma, { onError, onExit }))
}