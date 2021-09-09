const core = require('@actions/core')
const exec = require('@actions/exec')

async function main() {
    const derivedDataPath = core.getInput('derived-data-path')
    const target = core.getInput('target')
    const ignoreRegex = core.getInput('ignore-regex')
    const format = core.getInput('file-format')
    const output = core.getInput('output-file')
    await exec.exec(`${__dirname}/cov.sh -derivedDataPath ${derivedDataPath} -target ${target} -format ${format} -ignore-regex ${ignoreRegex} -output ${output}`)
}

main().catch(err => core.setFailed(err.message))
