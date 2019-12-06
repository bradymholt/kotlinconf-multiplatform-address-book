package com.ynab.di

import ContactCreationUpdatePresenter
import com.ynab.api.ContactApi
import com.ynab.presentation.ContactDetailPresenter
import com.ynab.presentation.ContactListPresenter
import kotlin.native.concurrent.ThreadLocal

@ThreadLocal
object CommonInjector {
    //    API
    private val api: ContactApi by lazy {
        ContactApi()
    }
    //    Presenters
    fun contactListPresenter() = ContactListPresenter(api)
    fun contactDetailPresenter() = ContactDetailPresenter(api)
    fun contactCreationUpdatePresenter() = ContactCreationUpdatePresenter(api)
}