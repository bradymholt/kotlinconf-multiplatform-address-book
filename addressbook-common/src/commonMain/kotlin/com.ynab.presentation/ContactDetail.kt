package com.ynab.presentation

import Contact
import com.ynab.api.ContactApi
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.coroutines.CoroutineContext
import kotlin.js.JsName

class ContactDetail {
    interface Presenter {
        @JsName("getContact")
        fun getContact(contactId: String)
    }
    interface View {
        @JsName("displayContact")
        fun displayContact(contact: Contact)
    }
}

class ContactDetailPresenter(
    private val contactApi: ContactApi,
    coroutineContext: CoroutineContext = ApplicationDispatcher
) : ContactDetail.Presenter, BasePresenter<ContactDetail.View>(coroutineContext) {
    override fun getContact(contactId: String) {
        scope.launch {
            val contact = contactApi.getContactById(contactId)
            withContext(UIDispatcher) {
                view?.displayContact(contact)
            }
        }
    }
}