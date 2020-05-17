/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Token, concat, space} from "../../tokens";
import {Builder} from "@romejs/js-formatter";
import {TSConstructorType} from "@romejs/js-ast";

export default function TSConstructorType(
	builder: Builder,
	node: TSConstructorType,
): Token {
	const tokens: Array<Token> = ["new", space, builder.tokenize(node.meta, node)];

	if (node.typeAnnotation) {
		tokens.push(space, "=>", space, builder.tokenize(node.typeAnnotation, node));
	}

	return concat(tokens);
}
