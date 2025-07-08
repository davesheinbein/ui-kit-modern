import type { IconName } from './IconTypes';

// Map of icon names to dynamic import functions
export const iconImporters: Record<
	IconName,
	() => Promise<{ default: React.ComponentType<any> }>
> = {
	'check': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCheck,
		})),
	'close': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTimes,
		})),
	'settings': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCog,
		})),
	'user': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUser,
		})),
	'home': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHome,
		})),
	'star': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaStar,
		})),
	'search': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSearch,
		})),
	'heart': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHeart,
		})),
	'bell': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBell,
		})),
	'arrow-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowLeft,
		})),
	'arrow-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowRight,
		})),
	'copy': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegCopy,
		})),
	'warning': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaExclamationTriangle,
		})),
	'success': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCheckCircle,
		})),
	'danger': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaExclamationCircle,
		})),
	'sun': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSun,
		})),
	'moon': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMoon,
		})),
	'play': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPlay,
		})),
	'edit': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEdit,
		})),
	'trash': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTrash,
		})),
	'info': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaInfoCircle,
		})),
	'plus': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPlus,
		})),
	'minus': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMinus,
		})),
	'upload': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUpload,
		})),
	'download': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaDownload,
		})),
	'lock': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaLock,
		})),
	'unlock': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUnlock,
		})),
	'eye': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEye,
		})),
	'eye-off': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEyeSlash,
		})),
	'filter': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFilter,
		})),
	'calendar': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCalendar,
		})),
	'camera': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCamera,
		})),
	'mail': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEnvelope,
		})),
	'phone': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPhone,
		})),
	'globe': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGlobe,
		})),
	'arrow-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowUp,
		})),
	'arrow-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowDown,
		})),
	'arrow-circle-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowCircleLeft,
		})),
	'arrow-circle-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowCircleRight,
		})),
	'arrow-circle-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowCircleUp,
		})),
	'arrow-circle-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowCircleDown,
		})),
	'chevron-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronLeft,
		})),
	'chevron-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronRight,
		})),
	'chevron-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronUp,
		})),
	'chevron-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronDown,
		})),
	'angle-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAngleLeft,
		})),
	'angle-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAngleRight,
		})),
	'angle-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAngleUp,
		})),
	'angle-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAngleDown,
		})),
	'bars': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBars,
		})),
	'ellipsis': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEllipsisH,
		})),
	'ellipsisV': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEllipsisV,
		})),
	'external': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaExternalLinkAlt,
		})),
	'link': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaLink,
		})),
	'paperclip': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPaperclip,
		})),
	'book': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBook,
		})),
	'bookmark': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBookmark,
		})),
	'file': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFile,
		})),
	'file-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFileAlt,
		})),
	'folder': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFolder,
		})),
	'folder-open': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFolderOpen,
		})),
	'image': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaImage,
		})),
	'images': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaImages,
		})),
	'video': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaVideo,
		})),
	'music': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMusic,
		})),
	'volume-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaVolumeUp,
		})),
	'volume-mute': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaVolumeMute,
		})),
	'microphone': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMicrophone,
		})),
	'microphone-off': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMicrophoneSlash,
		})),
	'headphones': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHeadphones,
		})),
	'play-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPlayCircle,
		})),
	'pause': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPause,
		})),
	'pause-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPauseCircle,
		})),
	'stop': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaStop,
		})),
	'step-forward': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaStepForward,
		})),
	'step-backward': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaStepBackward,
		})),
	'fast-forward': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFastForward,
		})),
	'fast-backward': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFastBackward,
		})),
	'redo': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRedo,
		})),
	'undo': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUndo,
		})),
	'sync': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSync,
		})),
	'spinner': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSpinner,
		})),
	'asterisk': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAsterisk,
		})),
	'question': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaQuestionCircle,
		})),
	'infoAlt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaInfo,
		})),
	'check-square': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCheckSquare,
		})),
	'square': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSquare,
		})),
	'th': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTh,
		})),
	'th-large': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaThLarge,
		})),
	'th-list': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaThList,
		})),
	'list': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaList,
		})),
	'list-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaListAlt,
		})),
	'table': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTable,
		})),
	'chart-bar': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChartBar,
		})),
	'chart-pie': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChartPie,
		})),
	'chart-line': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChartLine,
		})),
	'chart-area': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChartArea,
		})),
	'map': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMap,
		})),
	'map-marker': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMapMarker,
		})),
	'map-marker-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMapMarkerAlt,
		})),
	'location-arrow': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaLocationArrow,
		})),
	'compass': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCompass,
		})),
	'flag': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFlag,
		})),
	'trophy': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTrophy,
		})),
	'medal': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMedal,
		})),
	'gift': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGift,
		})),
	'shopping-cart': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaShoppingCart,
		})),
	'credit-card': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCreditCard,
		})),
	'wallet': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaWallet,
		})),
	'dollar-sign': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaDollarSign,
		})),
	'euro-sign': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEuroSign,
		})),
	'pound-sign': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPoundSign,
		})),
	'yen-sign': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaYenSign,
		})),
	'bitcoin': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBitcoin,
		})),
	'apple': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaApple,
		})),
	'android': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAndroid,
		})),
	'windows': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaWindows,
		})),
	'linux': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaLinux,
		})),
	'github': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGithub,
		})),
	'gitlab': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGitlab,
		})),
	'bitbucket': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBitbucket,
		})),
	'git': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGit,
		})),
	'code-branch': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCodeBranch,
		})),
	'code': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCode,
		})),
	'bug': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBug,
		})),
	'rocket': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRocket,
		})),
	'cloud': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCloud,
		})),
	'cloud-upload': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCloudUploadAlt,
		})),
	'cloud-download': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCloudDownloadAlt,
		})),
	'server': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaServer,
		})),
	'database': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaDatabase,
		})),
	'shield': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaShieldAlt,
		})),
	'key': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaKey,
		})),
	'unlock-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUnlockAlt,
		})),
	'user-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserCircle,
		})),
	'users': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUsers,
		})),
	'user-plus': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserPlus,
		})),
	'user-minus': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserMinus,
		})),
	'user-check': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserCheck,
		})),
	'user-times': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserTimes,
		})),
	'user-edit': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserEdit,
		})),
	'user-friends': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaUserFriends,
		})),
	'envelope-open': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaEnvelopeOpen,
		})),
	'at': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaAt,
		})),
	'comment': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaComment,
		})),
	'comments': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaComments,
		})),
	'paper-plane': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPaperPlane,
		})),
	'bell-off': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBellSlash,
		})),
	'calendar-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCalendarAlt,
		})),
	'calendar-check': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCalendarCheck,
		})),
	'calendar-times': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCalendarTimes,
		})),
	'clock': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaClock,
		})),
	'hourglass': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHourglass,
		})),
	'history': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHistory,
		})),
	'clipboard': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaClipboard,
		})),
	'tasks': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaTasks,
		})),
	'briefcase': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBriefcase,
		})),
	'building': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaBuilding,
		})),
	'crown': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCrown,
		})),
	'gem': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaGem,
		})),
	'lightbulb': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaLightbulb,
		})),
	'magic': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMagic,
		})),
	'puzzle-piece': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaPuzzlePiece,
		})),
	'smile': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaSmile,
		})),
	'frown': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaFrown,
		})),
	'meh': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaMeh,
		})),
	'thumbs-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaThumbsUp,
		})),
	'thumbs-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaThumbsDown,
		})),
	'hand-paper': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPaper,
		})),
	'hand-peace': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPeace,
		})),
	'hand-point-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPointUp,
		})),
	'hand-point-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPointDown,
		})),
	'hand-point-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPointLeft,
		})),
	'hand-point-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaHandPointRight,
		})),
	'arrow-alt-circle-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowAltCircleUp,
		})),
	'arrow-alt-circle-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowAltCircleDown,
		})),
	'arrow-alt-circle-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowAltCircleLeft,
		})),
	'arrow-alt-circle-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaArrowAltCircleRight,
		})),
	'caret-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCaretUp,
		})),
	'caret-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCaretDown,
		})),
	'caret-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCaretLeft,
		})),
	'caret-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCaretRight,
		})),
	'chevron-circle-up': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronCircleUp,
		})),
	'chevron-circle-down': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronCircleDown,
		})),
	'chevron-circle-left': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronCircleLeft,
		})),
	'chevron-circle-right': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaChevronCircleRight,
		})),
	'dot': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaDotCircle,
		})),
	'circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaCircle,
		})),
	'reg-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegCircle,
		})),
	'reg-dot-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegDotCircle,
		})),
	'reg-square': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegSquare,
		})),
	'reg-check-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegCheckCircle,
		})),
	'reg-times-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegTimesCircle,
		})),
	'reg-question-circle': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegQuestionCircle,
		})),
	'reg-smile': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegSmile,
		})),
	'reg-frown': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegFrown,
		})),
	'reg-meh': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegMeh,
		})),
	'reg-bell': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegBell,
		})),
	'reg-calendar-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegCalendarAlt,
		})),
	'reg-clock': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegClock,
		})),
	'reg-comment': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegComment,
		})),
	'reg-envelope': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegEnvelope,
		})),
	'reg-file-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegFileAlt,
		})),
	'reg-folder': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegFolder,
		})),
	'reg-image': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegImage,
		})),
	'reg-list-alt': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegListAlt,
		})),
	'reg-map': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegMap,
		})),
	'reg-paper-plane': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegPaperPlane,
		})),
	'reg-star': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegStar,
		})),
	'reg-user': () =>
		import('react-icons/fa').then((m) => ({
			default: m.FaRegUser,
		})),
};

export const ICONS_ALL_LIST = Object.keys(
	iconImporters
) as IconName[];
