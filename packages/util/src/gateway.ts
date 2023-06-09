export enum GatewayOpcodes {
	Dispatch = 0,
	Heartbeat,
	Identify,
	PresenceUpdate,
	VoiceStateUpdate,
	VoiceServerPing,
	Resume,
	Reconnect,
	RequestGuildMembers,
	InvalidSession,
	Hello,
	HeartbeatAck,
	CallConnect = 13,
	GuildSubscriptions,
	LobbyConnect,
	LobbyDisconnect,
	LobbyVoiceStatesUpdate,
	StreamCreate,
	StreamDelete,
	StreamWatch,
	StreamPing,
	StreamSetPaused,
	RequestGuildApplicationCommands = 24,
	EmbededActivityLaunch,
	EmbededActivityClose,
	EmbededACtivityUpdate,
	RequestForumUnreads,
	RemoteCommand,
	GetDeletedEntityIDsNotMatchingHash,
	RequestSoundboardSounds,
}

export enum GatewayCloseCodes {
	UnknownError = 4000,
	UnknownOpcode,
	DecodeError,
	NotAuthenticated,
	AuthenticationFailed,
	AlreadyAuthenticated,
	SessionNoLongerValid, // ?? real ??
	InvalidSeq,
	RateLimited,
	SessionTimedOut,
	InvalidShard,
	ShardingRequired,
	InvalidAPIVersion,
	InvalidIntents,
	DisallowedIntents,
}

export enum APIErrorCodes {
	GeneralError = 0,
	UnknownAccount = 10001,
	UnknownApplication,
	UnknownChannel,
	UnknownGuild,
	UnknownIntegration,
	UnknownInvite,
	UnknownMember,
	UnknownMessage,
	UnknownPermissionOverwrite,
	UnknownProvider,
	UnknownRole,
	UnknownToken,
	UnknownUser,
	UnknownEmoji,
	UnknownWebhook,
	UnknownWebhookService,
	UnknownSession = 10020,
	UnknownBan = 10026,
	UnknownSKU,
	UnknownStoreListing,
	UnknownEntitlement,
	UnknownBuild,
	UnknownLobby,
	UnknownBranch,
	UnknownStoreDirectoryLayout,
	UnknownRedistributable = 10036,
	UnknownGiftCode = 10038,
	UnknownStream = 10049,
	UnknownPremiumServerSubscription,
	UnknownGuildTemplate = 10057,
	UnknownDiscoveryCategory = 10059,
	UnknownSticker,
	UnknownInteraction = 10062,
	UnknownApplicationCommand,
	UnknownVoiceState = 10065,
	UnknownApplicationCommandPermissions = 10066,
	UnknownStageInstance = 10067,
	UnknownGuildMemberVerificationForm = 10068,
	UnknownGuildWelcomeScreen = 10069,
	UnknownGuildScheduledEvent = 10070,
	UnknownGuildScheduledEventUser = 10071,
	UnknownTag = 10087,
	BotsDisallowed = 20001,
	BotRequired,
	RPCProxyDisallowed,
	ExplicitContent = 20009,
	AccountScheduledForDeletion = 20011,
	UserNotAuthorizedForApplication = 20012,
	AccountDisabled = 20013,
	SlowmodeRateLimit = 20016,
	ChannelFollowingEditRateLimited = 20022,
	UnderMinimumAge = 20024,
	Quarantined = 20026,
	ChannelWriteRateLimit = 20028,
	GuildWriteRateLimit,
	DisallowedWords = 20031,
	GuildPremiumSubscriptionLevelTooLow = 20035,
	VanityURLRequiredForPublishedGuilds = 20040,
	VanityURLEmployeeOnlyGuildDisabled = 20044,
	VanityURLRequirementsNotMet,
	TooManyGuilds = 30001,
	TooManyFriends,
	TooManyPinsInChannel,
	TooManyRecipients,
	TooManyGuildRoles,
	TooManyUsingUsername,
	TooManyWebhooks,
	TooManyEmojis,
	TooManyReactions = 30010,
	TooManyGroupDMs,
	TooManyGuildChannels = 30013,
	TooManyAttachments = 30015,
	TooManyInvites,
	TooManyAnimatedEmojis = 30018,
	GuildAtCapacity,
	NotEnoughGuildMembers = 30029,
	TooManyGuildCategories,
	GuildAlreadyHasTemplate,
	TooManyApplicationCommands,
	ToomanyThreadParticipants,
	TooManyDailyApplicationCommandCreates,
	TooManyBansForNonGuildMembers,
	TooManyBanFetches,
	TooManyUncompletedGuildScheduledEvents,
	TooManyStickers,
	TooManyPruneRequests,
	TooManyGuildWidgetSettingUpdates = 30042,
	TooManyEditsToMessageOlderThan1HourReached = 30046,
	TooManyPinnedThreadsInForumChannel,
	TooManyTagsInForumChannel,
	BitrateTooHigh = 30052,
	TooManyPremiumEmojis = 30056,
	TooManyGuildWebhooks = 30058,
	TooManyBlockedUsers,
	TooManyChannelPermissionOverwrites = 30060,
	GuildChannelsTooLarge,
	Unauthorized = 40001,
	EmailVerificationRequired,
	RateLimitDMOpen,
	MessageSendTemporarilyDisabled,
	EntityTooLarge,
	FeatureTemporarilyDisabled,
	UserBanned,
	ConnectionRevoked = 40012,
	DeleteAccountTransferTeamOwnership = 40028,
	TargetUserNotConnectedToVoice = 40032,
	MessageAlreadyCrossposted,
	ApplicationCommandAlreadyExists = 40041,
	ApplicationCommandFailedToSend = 40043,
	ConnectSendMessageForumChannel = 40058,
	InteractionAlreadyAcknowledged = 40060,
	TagNamesMustBeUnique = 40061,
	ServerResourceRateLimit = 40062,
	NonModeratedTagRequired = 40066,
	TagRequired,
	UserQuarantined,
	InvitesDisabled,
	MissingAccess = 50001,
	InvalidAccountType,
	InvalidActionDM,
	GuildWidgetDisabled,
	CannotEditMessageByOtherUser,
	CannotSendEmptyMessage,
	CannotSendMessagesToThisUser,
	CannotSendMessagesInNonTextChannel,
	ChannelVerificationLevelTooHighForYouToGainAccess,
	OAuth2ApplicationDoesNotHaveABot,
	OAuth2ApplicationLimitReached,
	InvalidOAuth2State,
	MissingPermissions,
	InvalidToken,
	NoteWasTooLong,
	InvalidBulkDeleteCount,
	InvalidMFALevel,
	InvalidPassword,
	InvalidMessagePinChannel,
	InviteInvalid,
	CannotExecuteActionOnSystemMessage,
	InvalidPhoneNumber,
	InvalidClientID,
	InvalidChannelType,
	InvalidOAuth2AccessToken,
	OAuth2MissingScope,
	InvalidWebhookToken,
	InvalidRole,
	InvalidRecipient = 50033,
	MessageBulkDeleteTooOld,
	InviteAcceptedToGuildNotContainingBot,
	InvalidActivityAction = 50039,
	InvalidAPIVersion = 50041,
	InvalidFileAssetSize = 50045,
	InvalidFileAsset,
	InvalidGiftRedemptionExhasted = 50050,
	InvalidGiftRedemptionOwned,
	InvalidGiftSelfRedeemption = 50054,
	InvalidGuild,
	InvalidRequestOrigin = 50067,
	InvalidMessageType = 50068,
	PaymentSourceRequired = 50070,
	CannotModifySystemWebhook = 50073,
	CannotDeleteCommunityRequiredChannel,
	CannotEditMessageStickers = 50080,
	InvalidStickerSent,
	CannotExecuteActionOnArchivedThread = 50083,
	InvalidThreadNotificationSettings,
	InvalidThreadBeforeValue,
	CommunityChannelsMustBeText = 50086,
	InvalidEventEntityType = 50091,
	ServerNotAvailableLocation = 50095,
	ServerMonetizationRequired = 50097,
	ServerBoostsRequired = 50101,
	InvalidUserSettingsData = 50105,
	InvalidJSON = 50109,
	OwnershipCannotBeTransferredToBot = 50132,
	InvalidFileAssetSizeResizeGif = 50138,
	CannotMixSubscriptionAndNonSubscriptionRolesForEmoji = 50144,
	CannotConvertBetweenPremiumAndNonPremiumEmoji,
	UploadedFileNotFound,
	NewOwnerIneligibleForServerSubscription = 50164,
	InvalidActivityLaunchNoAccess = 50106,
	InvalidActivityLaunchPremiumTier,
	InvalidActivityLaunchConcurrentActivities,
	InvalidActivityLaunchAFKChannel,
	InvalidActivityLaunchAgeGated = 50165,
	StickerSendMissingPermission = 50600,
	MFAEnabled = 60001,
	MFADisabled,
	MFARequired,
	MFAUnverified,
	MFAInvalidSecret,
	MFAInvalidTicket,
	MFAInvalidCode = 60008,
	MFAInvalidSession,
	PhoneNumberUnableToSend = 70003,
	PhoneVerificationRequired = 70009,
	RelationshipIncomingDisabled = 80000,
	RelationshipIncomingBlocked,
	RelationshipInvalidUserBot,
	RelationshipInvalidSelf,
	RelationshipInvalidTag,
	RelationshipAlreadyFriends = 80007,
	ReactionBlocked = 90001,
	InvalidGiftRedemptionSubscriptionManaged = 100021,
	InvalidGiftRedemptionSubscriptionIncompatible = 100023,
	InvalidGiftRedemptionInvoiceOpen,
	BillingNonRefundablePaymentSource = 100060,
	ApplicationNotAvailable = 110001,
	ListingAlreadyJoined = 120000,
	ListingTooManyMembers,
	ListingJoinBlocked,
	APIResourceOverloaded = 130000,
	StageAlreadyOpen = 150006,
	CannotReplyWithPermissionToReadHistory = 160002,
	ThreadExistsForMessage = 160004,
	TooManyThreads = 160006,
	ThreadLocked,
	TooManyActiveThreads,
	TooManyActiveAnnouncementThreads,
	InvalidJSONForUploadedLottieFile = 170001,
	UploadedLottiesCannotContainRasterizedImages,
	StickerMaxFrameRateExceeded,
	StickerFrameCountExceeded,
	LottieAnimationMaxDimensionsExceeded,
	StickerFrameRateInvalid,
	StickerAnimationDurationExceeded,
	PoggermodeTemporarilyDisabled,
	CannotUpdateFinishedEvent = 180000,
	FailedToCreateStageForEvent = 180002,
	AutomodMesageBlocked = 200000,
	AutomodTitleBlocked,
	AutomodInvalidRustServiceResponse,
	WebhookThreadInForumChannelInvalid = 220001,
	WebhookThreadInForumChannelCannotHaveBoth,
	WebhookThreadOnlyInForumChannel,
	WebhookServicesCannotBeUsedInForumChannels,
	HarmfulLinkMessageBlocked = 24e4,
	ClydeConsentRequired = 31e4,
}
