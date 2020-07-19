const envVariables = process.env
const Config = {}

Object.keys(envVariables).forEach(variable => {
   if (variable.includes('RESOURCE_MANAGEMENT')) {
      const envKey = variable.replace('RESOURCE_MANAGEMENT_', '')
      Config[envKey] = envVariables[variable]
   }
})

export default Config
