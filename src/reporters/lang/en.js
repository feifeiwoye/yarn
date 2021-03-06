/* @flow */
 /* eslint max-len: 0 */

const messages = {
  upToDate: 'Already up-to-date.',
  folderInSync: 'Folder in sync.',
  nothingToInstall: 'Nothing to install.',
  resolvingPackages: 'Resolving packages',
  fetchingPackages: 'Fetching packages',
  linkingDependencies: 'Linking dependencies',
  rebuildingPackages: 'Rebuilding all packages',
  buildingFreshPackages: 'Building fresh packages',
  cleaningModules: 'Cleaning modules',
  bumpingVersion: 'Bumping version',
  savingHar: 'Saving HAR file: $0',
  answer: 'Answer?',
  usage: 'Usage',
  installCommandRenamed: '`install` has been replaced with `add` to add new dependencies. Run $0 instead.',
  waitingInstance: 'Waiting for the other yarn instance to finish',
  offlineRetrying: 'There appears to be trouble with your network connection. Retrying...',
  clearedCache: 'Cleared cache.',
  packWroteTarball: 'Wrote tarball to $0.',

  manifestPotentialTypo: 'Potential typo $0, did you mean $1?',
  manifestBuiltinModule: '$0 is also the name of a node core module',
  manifestNameDot: "Name can't start with a dot",
  manifestNameIllegalChars: 'Name contains illegal characters',
  manifestNameBlacklisted: 'Name is blacklisted',
  manifestLicenseInvalid: 'License should be a valid SPDX license expression',
  manifestLicenseNone: 'No license field',
  manifestStringExpected: '$0 is not a string',
  manifestDependencyBuiltin: 'Dependency $0 listed in $1 is the name of a built-in module',
  manifestDependencyCollision: '$0 has dependency $1 with range $2 that collides with a dependency in $3 of the same name with version $4',

  configSet: 'Set $0 to $1.',
  configDelete: 'Deleted $0.',
  configNpm: 'npm config',
  configYarn: 'yarn config',

  couldntFindPackagejson: "Couldn't find a package.json file in $0",
  couldntFindMatch: "Couldn't find match for $0 in $1 for $2.",
  couldntFindPackageInCache: "Couldn't find any versions for $0 that matches $1 in our cache. Possible versions: $2",
  couldntFindVersionThatMatchesRange: "Couldn't find any versions for $0 that matches $1. Possible versions: $2",
  moduleNotInManifest: "This module isn't specified in a manifest.",
  unknownFolderOrTarball: "Passed folder/tarball doesn't exist,",
  unknownPackage: "Couldn't find package $0.",
  unknownPackageName: "Couldn't find package name.",
  unknownUser: "Couldn't find user $0.",
  unknownRegistryResolver: 'Unknown registry resolver $0',
  userNotAnOwner: "User $0 isn't an owner of this package.",
  invalidVersionArgument: 'Use the $0 flag to create a new version.',
  invalidVersion: 'Invalid version supplied.',
  requiredVersionInRange: 'Required version in range.',
  packageNotFoundRegistry: "Couldn't find package $0 on the $1 registry.",
  doesntExist: "$0 doesn't exist.",
  missingRequiredPackageKey: `Package $0 doesn't have a $1.`,
  invalidAccess: 'Invalid argument for access, expected public or restricted.',
  invalidCommand: 'Invalid subcommand. Try $0',
  invalidGistFragment: 'Invalid gist fragment $0.',
  invalidHostedGitFragment: 'Invalid hosted git fragment $0.',
  invalidFragment: 'Invalid fragment $0.',
  invalidPackageName: 'Invalid package name.',
  couldntFindManifestIn: "Couldn't find manifest in $0.",
  shrinkwrapWarning: 'npm-shrinkwrap.json found. This will not be updated or respected. See https://yarnpkg.com/en/docs/migrating-from-npm for more information.',
  lockfileOutdated: 'Outdated lockfile. Please run `$ yarn install` and try again.',
  ignoredScripts: 'Ignored scripts due to flag.',
  missingAddDependencies: 'Missing list of packages to add to your project.',
  yesWarning: 'The yes flag has been set. This will automatically answer yes to all questions which may have security implications.',
  networkWarning: "You don't appear to have an internet connection. Try the --offline flag to use the cache for registry queries.",
  flatGlobalError: 'The package $0@$1 requires a flat dependency graph. Add `"flat": true` to your package.json and try again.',
  noName: `Package doesn't have a name.`,
  noVersion: `Package doesn't have a version.`,
  answerRequired: 'An answer is required.',
  missingWhyDependency: 'Missing package name, folder or path to file to identify why a package has been installed',
  bugReport: 'If you think this is a bug, please open a bug report with the information provided in $0.',
  unexpectedError: 'An unexpected error occurred: $0.',
  jsonError: 'Error parsing JSON at $0, $1.',
  noFilePermission: "We don't have permissions to touch the file $0.",

  yarnOutdated: "Your current version of Yarn is out of date. The latest version is $0 while you're on $1.",
  yarnOutdatedInstaller: 'To upgrade, download the latest installer at $0.',
  yarnOutdatedCommand: 'To upgrade, run the following command:',

  tooManyArguments: 'Too many arguments, maximum of $0.',
  tooFewArguments: 'Not enough arguments, expected at least $0.',
  noArguments: "This command doesn't require any arguments.",

  ownerRemoving: 'Removing owner $0 from package $1.',
  ownerRemoved: 'Owner removed.',
  ownerRemoveError: "Couldn't remove owner.",
  ownerGetting: 'Getting owners for package $0',
  ownerGettingFailed: "Couldn't get list of owners.",
  ownerAlready: 'This user is already an owner of this package.',
  ownerAdded: 'Added owner.',
  ownerAdding: 'Adding owner $0 to package $1',
  ownerAddingFailed: "Couldn't add owner.",
  ownerNone: 'No owners.',

  teamCreating: 'Creating team',
  teamRemoving: 'Removing team',
  teamAddingUser: 'Adding user to team',
  teamRemovingUser: 'Removing user from team',
  teamListing: 'Listing teams',

  cleaning: 'Cleaning modules',
  cleanCreatingFile: 'Creating $0',

  linkCollision: "There's already a module called $0 registered.",
  linkMissing: 'No registered module found called $0.',
  linkInstallMessage: 'You can now run `yarn link $0` in the projects where you want to use this module and it will be used instead.',
  linkRegistered: 'Registered $0.',
  linkUnregistered: 'Unregistered $0.',
  linkUsing: 'Using linked module for $0.',

  commandNotSpecified: 'No command specified.',
  binCommands: 'Commands available from binary scripts: ',
  possibleCommands: 'Project commands',
  commandQuestion: 'Which command would you like to run?',
  commandFailed: 'Command failed with exit code $0.',

  foundIncompatible: 'Found incompatible module',
  incompatibleEngine: 'The engine $0 is incompatible with this module. Expected version $1.',
  incompatibleCPU: 'The CPU architecture $0 is incompatible with this module.',
  incompatibleOS: 'The platform $0 is incompatible with this module.',
  invalidEngine: 'The engine $0 appears to be invalid.',

  selfUpdateReleased: 'Replaced current release with $0.',
  selfUpdateDownloading: 'Downloading yarn version $0.',
  selfUpdateNoNewer: 'Yarn is already using the latest version.',

  optionalCompatibilityExcluded: '$0 is an optional dependency and failed compatibility check. Excluding it from installation.',
  optionalModuleFail: 'This module is OPTIONAL, you can safely ignore this error',
  optionalModuleScriptFail: 'Error running install script for optional dependency: $0',

  unmetPeer: 'Unmet peer dependency $0.',
  incorrectPeer: 'Incorrect peer dependency $0.',

  savedNewDependency: 'Saved 1 new dependency.',
  savedNewDependencies: 'Saved $0 new dependencies.',

  foundWarnings: 'Found $0 warnings.',
  foundErrors: 'Found $0 errors.',

  savedLockfile: 'Saved lockfile.',
  noRequiredLockfile: 'No lockfile in this directory. Run `yarn install` to generate one.',
  noLockfileFound: 'No lockfile found.',

  invalidSemver: 'Invalid semver version',
  newVersion: 'New version',
  currentVersion: 'Current version',

  manualVersionResolution: 'Unable to find a suitable version for $0, please choose one by typing one of the numbers below:',
  manualVersionResolutionOption: '$0 which resolved to $1',

  createdTag: 'Created tag.',
  createdTagFail: "Couldn't add tag.",
  deletedTag: 'Deleted tag.',
  deletedTagFail: "Couldn't delete tag.",
  gettingTags: 'Getting tags',
  deletingTags: 'Deleting tag',
  creatingTag: 'Creating tag $0 = $1',

  whyStart: 'Why do we have the module $0?',
  whyFinding: 'Finding dependency',
  whyCalculating: 'Calculating file sizes',
  whyUnknownMatch: "We couldn't find a match!",
  whyInitGraph: 'Initialising dependency graph',
  whyWhoKnows: "We don't know why this module exists",
  whyDiskSizeWithout: 'Disk size without dependencies: $0',
  whyDiskSizeUnique: 'Disk size with unique dependencies: $0',
  whyDiskSizeTransitive: 'Disk size with transitive dependencies: $0',
  whySharedDependencies: 'Amount of shared dependencies: $0',
  whyHoistedTo: `Has been hoisted to $0`,

  whyHoistedFromSimple: `This module exists because it's hoisted from $0.`,
  whyDependedOnSimple: `This module exists because $0 depends on it.`,
  whySpecifiedSimple: `This module exists because it's specified in $0.`,
  whyReasons: 'Reasons this module exists',
  whyHoistedFrom: 'Hoisted from $0',
  whyDependedOn: '$0 depends on it',
  whySpecified: `Specified in $0`,

  uninstalledPackages: 'Uninstalled packages.',
  uninstallRegenerate: 'Regenerating lockfile and installing missing dependencies',

  cleanRemovedFiles: 'Removed $0 files',
  cleanSavedSize: 'Saved $0 MB.',

  npmUsername: 'npm username',
  npmPassword: 'npm password',
  npmEmail: 'npm email',

  loggingIn: 'Logging in',
  loggedIn: 'Logged in.',
  notRevokingEnvToken: 'Not revoking login token, specified via environment variable.',
  notRevokingConfigToken: 'Not revoking login token, specified via config file.',
  noTokenToRevoke: 'No login token to revoke.',
  revokingToken: 'Revoking token',
  revokedToken: 'Revoked login token.',

  loginAsPublic: 'Logging in as public',
  incorrectCredentials: 'Incorrect username or password.',
  clearedCredentials: 'Cleared login credentials.',

  publishSame: 'New version is the same as the current version.',
  publishFail: "Couldn't publish package.",
  publishPrivate: 'Package marked as private, not publishing.',
  published: 'Published.',
  publishing: 'Publishing',

  infoFail: 'Received invalid response from npm.',
  malformedRegistryResponse: 'Received malformed response from registry. The registry may be down.',

  cantRequestOffline: 'Can\'t make a request in offline mode',
  requestManagerNotSetupHAR: 'RequestManager was not setup to capture HAR files',
  requestError: 'Request $0 returned a $1',
  tarballNotInNetworkOrCache: '$0: Tarball is not in network and can not be located in cache ($1)',
  fetchBadHash: 'Bad hash. Expected $0 but got $1 ',
  fetchErrorCorrupt: '$0. Mirror tarball appears to be corrupt. You can resolve this by running:\n\n  $ rm -rf $1\n  $ yarn install',
  errorDecompressingTarball: '$0. Error decompressing $1, it appears to be corrupt.',
  updateInstalling: 'Installing $0...',
};

export type LanguageKeys = $Keys<typeof messages>;
export default messages;
