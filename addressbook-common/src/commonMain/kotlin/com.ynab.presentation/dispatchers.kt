package com.ynab.presentation

import kotlin.coroutines.CoroutineContext

internal expect val ApplicationDispatcher: CoroutineContext
internal expect val UIDispatcher: CoroutineContext