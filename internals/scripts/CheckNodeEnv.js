// @flow
import chalk from 'chalk'

export default function CheckNodeEnv(expectedEnv: string) {
  if (!expectedEnv) {
    throw new Error('"expectedEnv" not set')
  }

  if (process.env.NODE_ENV !== expectedEnv) {
    throw new Error(chalk.whiteBright.bgRed.bold(`"process.env.NODE_ENV" must be "${expectedEnv}" to use this webpack config`))
  }
}
