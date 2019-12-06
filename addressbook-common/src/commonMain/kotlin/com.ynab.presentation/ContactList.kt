package com.ynab.presentation

import Contact
import com.ynab.api.ContactApi
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.coroutines.CoroutineContext
import kotlin.js.JsName

class ContactList {
    interface View {
        @JsName("displayContactList")
        fun displayContactList(contactList: List<Contact>)
    }
}

class ContactListPresenter(
    private val contactApi: ContactApi,
    coroutineContext: CoroutineContext = ApplicationDispatcher
) : BasePresenter<ContactList.View>(coroutineContext) {
    override fun onViewAttached(view: ContactList.View) {
        scope.launch {
            val contactList = contactApi.getAllContacts()
            withContext(UIDispatcher) {
                view?.displayContactList(contactList)
            }
        }
    }
}