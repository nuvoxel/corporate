export function useDomainConfig() {
  // Hydrogen is now a separate webapp at hydrogen.nuvoxel.com
  // This hook is only used in the corporate site
  
  return {
    isHydrogenDomain: false,
    domain: 'corporate',
    basePath: '',
  }
}