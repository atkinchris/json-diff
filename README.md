# json-diff
A hastily written tool to quickly show differences between two concatenated JSON objects.

## What is this?

This is a little webpage to allow you to see the differences between two JSON objects in one string.

## Why does this exist?

When comparing JSON strings in some test frameworks, the outputted mismatch is not neatly formatted, and the differences are not easy to see.

For example, in Scalatest:

```scala
contentAsJson(myObject) mustBe JSON.parse(myOtherObjectStringified)
```

Outputs

`"{"name":"First Last","favouriteColour":"blue"} does not match {"favouriteColour":"red", "name":"First Last"}"`

In non-trivial examples, it can be difficult to find the differences. Pasting that string into this page will separate the two objects, `JSON.parse` them and show the difference.
